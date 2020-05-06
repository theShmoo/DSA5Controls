import React from "react";

import DSASelect from '../controls/DSASelect';

export default function FilterPropertiesWidget(props)
{
  const handleChange = (val, property) => {
    let filter = {};

    if(val)
      filter[property] = val.map( x => x.value);
    else
      filter[property] = [];

    props.onUserInput(filter);
  }

  const {property, selected, properties} = props;
  const options = properties.map((m) => {return {value: m, label: m};});
  return <DSASelect
      multi={true}
      options={options}
      value={selected}
      label={property}
      onChange={(v) => handleChange(v, property)}
    />
}
