import React from 'react'
import PageLayout from '../../components/PageLayout/Layout';
import { VAT_FORM } from '../../utils/form_grid.data';
import { VAT_SCHEMA } from '../../utils/states.values';
import { VAT_GRID } from '../../utils/table_header.data';

const VatConfig = () => {
  return (
    <PageLayout
      title={"VAT Configuration"}
      URL={"/api/vats"}
      pageGrid={VAT_GRID}
      formGrid={VAT_FORM}
      valuesGroup={VAT_SCHEMA}
      searchKey={'name'}
    />
  );
}

export default VatConfig