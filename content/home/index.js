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

// Creates an object mapping the id of each menu item to its field value for
// the given field name
const pivot = (field) =>
  menu.items.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item[field],
    }),
    {}
  )

export const menuDefaults = pivot("default")
export const menuColors = pivot("color")
