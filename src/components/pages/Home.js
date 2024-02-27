import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import { shoes } from '../../data';

class Home extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row mt-5'>
					<InfoConsumer>
						{value => {
							return shoes?.map(item => {
								return <Info key={item.id} item={item} />;
							});
						}}
					</InfoConsumer>
				</div>
			</div>
		);
	}
}
export default Home;
