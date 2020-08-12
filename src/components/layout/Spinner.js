import React, { Fragment } from 'react';
import spinner from './Spinner-1.1s-200px.gif';

const Spinner = () => (
	<Fragment>
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '200px', margin: 'auto', display: 'block' }}
		/>
	</Fragment>
);

export default Spinner;
