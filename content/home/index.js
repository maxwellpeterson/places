export const menu = {
  items: [
    {
      id: "following",
      title: "Following",
      color: "red",
      default: true,
    },
    {
      id: "local",
      title: "Local",
      color: "blue",
      default: false,
    },
    {
      id: "fromHome",
      title: "From Home",
      color: "purple",
      default: false,
    },
  ],
}

// Better way to define these convenience exports...

export const menuDefaults = menu.items.reduce(
  (obj, item) => ({
    ...obj,
    [item.id]: item.default,
  }),
  {}
)

export const menuColors = menu.items.reduce(
  (obj, item) => ({
    ...obj,
    [item.id]: item.color,
  }),
  {}
)
