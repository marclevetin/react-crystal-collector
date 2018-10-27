import React, { Component } from 'react';

// components
import Crystal from '../Crystal';

class CrystalList extends Component {
  render() {
    const allTheCrystals = this.props.crystals.map((crystal) => <Crystal 
                                                                    key={crystal.id} 
                                                                    value={crystal.value}
                                                                    handleClick={this.props.processFunction}
                                                                />
                                                    );

    return (
      <div>
        This is the CrystalList
        {allTheCrystals}
      </div>
    );
  }
}

export default CrystalList;
