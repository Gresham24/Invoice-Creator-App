// example of how I would manage simple colours for an app. You can have `grey, primary and secondary` which range from light to dark.

const Colors = {
  grey: {
    c0: "#fff",
    c10: "#f6f6f6",
    c100: "#eee",
    c200: "#ddd",
    c300: "#ccc",
    c400: "#aaa",
    c500: "#777",
    c600: "#555",
    c700: "#333",
    c800: "#222",
    c900: "#111",
    c1000: "#000000",
  },
};

export default Colors;

// If you want to have light and dark modes, you can look into Design Tokens and Theming, which would require something more complex. But as
// a start, a simple object like this should work
