import React, { Component } from "react";
import {
  Input,
  ButtonGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class inputBox extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      filter: "",
      dropdownOpen: false,
      option: ""
    };
  }

  border = {
    contains: "border-success",
    regex: "border-warning"
  };

  dropDownColor = {
    contains: "btn-success",
    regex: "btn-warning"
  };

  getFilter = evt => {
    this.setState({
      filter: evt.target.value
    });
  };

  getOption = evt => {
    if (evt.currentTarget.textContent === "clear") {
      this.setState({
        filter: "",
        option: ""
      });
    } else {
      this.setState({
        option: evt.currentTarget.textContent
      });
    }
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    console.log("STATE:", this.state);
    return (
      <div className="container">
        <ButtonGroup>
          <Input
            className={this.border[this.state.option]}
            type="text"
            onChange={evt => this.getFilter(evt)}
            value={this.state.filter}
          />
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle
              caret
              className={this.dropDownColor[this.state.option]}
            />
            <DropdownMenu>
              <DropdownItem onClick={evt => this.getOption(evt)} key="1">
                contains
              </DropdownItem>
              <DropdownItem onClick={evt => this.getOption(evt)} key="2">
                regex
              </DropdownItem>
              <DropdownItem onClick={evt => this.getOption(evt)} key="3">
                clear
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </div>
    );
  }
}

export default inputBox;
