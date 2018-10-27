import React, { Component } from 'react';

// components
import Crystal from '../Crystal';

class CrystalList extends Component {
  render() {
    const allTheCrystals = (this.props.numberCrystals) 
                                ? Array( parseInt(this.props.numberCrystals) ).fill(1).map((crystal, index) => <Crystal key={index}/>)
                                : "Nothing here"

    return (
      <div>
        This is the CrystalList
        {allTheCrystals}
      </div>
    );
  }
}

export default CrystalList;
