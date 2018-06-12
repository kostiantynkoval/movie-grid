import React from 'react';

import CaretDown from './CaretDown';
import CaretUp from './CaretUp';

import DropdownWrapper from '../styled/DropdownWrapper';
import DropdownSelect from '../styled/DropdownSelect';
import DropdownContainer from '../styled/DropdownContainer';
import DropdownRendered from '../styled/DropdownRendered';
import DropdownArrow from '../styled/DropdownArrow';
import DropdownList from '../styled/DropdownList';
import DropdownListItem from '../styled/DropdownListItem';
import ArrowInner from '../styled/ArrowInner';

const items = [
  {id: 1, name: 'Var 1'},
  {id: 2, name: 'Var 2'},
  {id: 3, name: 'Var 3'},
  {id: 4, name: 'Var 4'}
]

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentOption: {}
    }
  }

  componentDidMount(){
    document.getElementsByTagName('body')[0].addEventListener('click', () => {
      if (this.state.isOpen) {
        this.toggleDropdown();
      }
    })
  }

  toggleDropdown() {
    if (!this.props.disabled) {
      this.setState({isOpen: !this.state.isOpen});
    }
  }

  pickOption(option) {
    this.setState({currentOption: option});
  }

  render() {
    return (
      <DropdownWrapper>
        <DropdownSelect onClick={() => this.toggleDropdown()}>
          <span>
            <DropdownContainer disabled={this.props.disabled} opened={this.state.isOpen}>
              <DropdownRendered>
                My Account
              </DropdownRendered>
              <DropdownArrow>
                <ArrowInner>
                  {this.state.isOpen ? <CaretUp/> : <CaretDown/>}
                </ArrowInner>
              </DropdownArrow>
            </DropdownContainer>
          </span>
        </DropdownSelect>
        <DropdownList opened={this.state.isOpen}>
          <DropdownListItem disabled>Disabled</DropdownListItem>
          { items.map(item => (
            <DropdownListItem onClick={() => this.pickOption(item)} active={item.id === this.state.currentOption.id} key={item.id}>{item.name}</DropdownListItem>
          ))}
        </DropdownList>
      </DropdownWrapper>
    )
  }
}

export default Dropdown;
