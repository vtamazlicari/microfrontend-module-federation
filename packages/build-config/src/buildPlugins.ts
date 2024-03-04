import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(
  options: BuildOptions
): webpack.Configuration["plugins"] {
  const isDev = options.mode === "development";
  const plugins: webpack.Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.public, "favicon.ico"),
      // need to have right path for our chancks
      publicPath: "/",
    }),
    // it allow as to get env varibles in the project
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      // it is used for hot refresh
      new ReactRefreshWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(options.paths.public, "locales"),
            to: path.resolve(options.paths.output, "locales"),
          },
        ],
      })
    );
  }

  return plugins;
}
