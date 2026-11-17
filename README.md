# react_typescript_materialui_usm_boilerplate

A ready-to-use starter for React and TypeScript, with Material-UI and usm-redux already set up. usm-redux gives you Redux without the actions and reducers: your state is one small class. A working counter shows how to read and change state, so you can start building straight away.

## What's included

1. **React with TypeScript,** made with Create React App.
2. **usm-redux** on top of `react-redux`: a `StatesController` class instead of actions and reducers.
3. **Material-UI** with its own theme file.
4. **A working counter** that reads and changes the state.

## Project layout

```
src/index.tsx                   Redux provider and Material-UI theme
src/App.tsx                     the app shell
src/Components/Counter.tsx      reads and changes the state
src/Others/StatesController.ts  the usm-redux state
src/Others/Theme.ts             Material-UI theme
```

## Get started

```bash
git clone https://github.com/p32929/react_typescript_materialui_usm_boilerplate.git
cd react_typescript_materialui_usm_boilerplate
npm install
npm start          # opens http://localhost:3000
```

Run `npm run build` for a production build, and `npm test` to run the tests.

## Related starters

1. [react-typescript-materialui-overmind-boilerplate](https://github.com/p32929/react-typescript-materialui-overmind-boilerplate): the same setup with Overmind instead of usm-redux.
2. [react_shadcn_ts_usm_boilerplate](https://github.com/p32929/react_shadcn_ts_usm_boilerplate): usm-redux with Vite and shadcn/ui.
3. [nextjs_typescript_materialui_usm_boilerplate](https://github.com/p32929/nextjs_typescript_materialui_usm_boilerplate): the Next.js version.

## License

MIT License, Copyright (c) 2020 Fayaz Bin Salam. See [LICENSE](LICENSE) for the full text.

## Contributing

Contributions are very welcome, thank you! Before you start on a pull request, please open an issue and tell me what you would like to add or change. That way we can agree on it first, and your time is not spent on something that might not fit.

## You might also like

<a href="https://openstore.pfay.workers.dev/cards/p32929?n=4&amp;repo=react_typescript_materialui_usm_boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://openstore.pfay.workers.dev/cards/p32929.svg?n=4&amp;repo=react_typescript_materialui_usm_boilerplate&amp;theme=dark"><img src="https://openstore.pfay.workers.dev/cards/p32929.svg?n=4&amp;repo=react_typescript_materialui_usm_boilerplate&amp;theme=light" width="100%" alt="More apps by p32929 on OpenStore"></picture></a>

<p><a href="https://p32929.github.io/share/?repo=react_typescript_materialui_usm_boilerplate"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-share-dark.svg"><img src="https://p32929.github.io/readme/footer-share-light.svg" width="50%" align="top" alt="Share this project with your friends in one click"></picture></a><a href="https://p32929.github.io/support/"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-support-dark.svg"><img src="https://p32929.github.io/readme/footer-support-light.svg" width="50%" align="top" alt="If you like my work and want to support me, feel free to support"></picture></a><br><a href="https://openstore.pfay.workers.dev/add"><picture><source media="(prefers-color-scheme: dark)" srcset="https://p32929.github.io/readme/footer-join-dark.svg"><img src="https://p32929.github.io/readme/footer-join-light.svg" width="100%" align="top" alt="Put your own apps on OpenStore: free, your listing lives in your own repo"></picture></a></p>
