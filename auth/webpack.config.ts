import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { dependencies } from "./package.json";
import { ModuleFederationPlugin } from "@module-federation/enhanced/webpack";

const isDev = process.env.NODE_ENV !== "production";

export default {
  entry: "./src/main.tsx",
  mode: isDev ? "development" : "production",
  output: {
    publicPath: "auto",
    clean: true
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    port: 3008,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
              ],
              plugins: [isDev && require.resolve("react-refresh/babel")].filter(Boolean)
            }
          },
          "ts-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
plugins: [
new ModuleFederationPlugin({
  name: "auth",
  filename: "remoteEntry.js",
  exposes: {
    "./App": "./src/App",
  },
  shared: {
    react: { singleton: true, eager: true, requiredVersion: "19.2.1" },
    "react-dom": { singleton: true, eager: true, requiredVersion: "19.2.1" },
    "react/jsx-runtime": { singleton: true, eager: true },
    "react-router-dom": { singleton: true, eager: true },
  },
})

,
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html") // <- root folder
  }),
  isDev && new ReactRefreshWebpackPlugin()
].filter(Boolean)
};
