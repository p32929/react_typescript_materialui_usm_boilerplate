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

## Share

<a href="https://p32929.github.io/share/?repo=react_typescript_materialui_usm_boilerplate"><img src="https://p32929.github.io/readme/share.svg" alt="Share this with your friends in just a click" width="420"></a>

## Support

<a href="https://p32929.github.io/support/"><img src="https://p32929.github.io/readme/support.svg" alt="If you like my works and want to support me, feel free to support" width="420"></a>
