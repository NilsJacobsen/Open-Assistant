export async function defineConfig(env) {
  const { default: i18nextPlugin } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next@2/dist/index.js"
  );
  const { default: standardLintRules } = await env.$import(
    "https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js"
  );

  return {
    referenceLanguage: "en",
    plugins: [
      i18nextPlugin({
        pathPattern: {
          account: "./website/public/locales/{language}/account.json",
          chat: "./website/public/locales/{language}/chat.json",
          common: "./website/public/locales/{language}/common.json",
          dashboard: "./website/public/locales/{language}/dashboard.json",
          error: "./website/public/locales/{language}/error.json",
          index: "./website/public/locales/{language}/index.json",
          labelling: "./website/public/locales/{language}/labelling.json",
          leaderboard: "./website/public/locales/{language}/leaderboard.json",
          message: "./website/public/locales/{language}/message.json",
          stats: "./website/public/locales/{language}/stats.json",
          tasks: "./website/public/locales/{language}/tasks.json",
          tos: "./website/public/locales/{language}/tos.json",
        }
      }),
      standardLintRules(),
    ],
  };
}
