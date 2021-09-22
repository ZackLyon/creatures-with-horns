import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>
              <option value="">All</option>
              {
                  this.props.filteredOptions.map(item => <option value={item} key={item}>{item}
              </option>)
              }
            </select>
        )
    }
}
