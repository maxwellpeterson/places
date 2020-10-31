import DropdownList from "ReactWidgets"

let { DropdownList } = ReactWidgets
let categories = ["History", "Nature", "Paranormal", "Friends", "Family"]

export default class CategoriesMenu extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { value: "History" }
  }

  render() {
    return (
      <DropdownList
        data={categories}
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
      />
    )
  }
}
