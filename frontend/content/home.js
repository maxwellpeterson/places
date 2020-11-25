// Menu contents and related properties
export const menuContent = {
  items: [
    {
      id: "following",
      title: "Following",
      color: "red",
      initialSelection: true,
    },
    {
      id: "local",
      title: "Local",
      color: "blue",
      initialSelection: false,
    },
    {
      id: "fromHome",
      title: "From Home",
      color: "purple",
      initialSelection: false,
    },
  ],
}

// Creates a new object mapping the id of each menu item to its field value
// for the given field name.
const menuItemMap = (field) =>
  menuContent.items.reduce(
    (obj, item) => ({
      ...obj,
      [item.id]: item[field],
    }),
    {}
  )

// Default menu selections, currently only the following layer
export const initialMenuSelections = menuItemMap("initialSelection")

// The colors corresponding to each menu item
export const menuColors = menuItemMap("color")

// Intial visible region of the map when the app is opened
// Currently zoomed in on San Francisco
export const initialMapRegion = {
  latitude: 37.77090181921317,
  latitudeDelta: 0.20944657739749317,
  longitude: -122.4506578747024,
  longitudeDelta: 0.153573774239959,
}

// Letter that appears on profile button
export const profileButtonText = "J"
