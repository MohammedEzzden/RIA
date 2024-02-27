import React from 'react';

import { useParams } from 'react-router-dom';
import { shoes } from '../../data';
import Info from '../Info';
import { placeInfo } from '../../data';
export default function Details() {
	const { id } = useParams();

	const item = shoes?.find(x => x.id == id);

	return (
		<div>
			<Info key={item.id} item={item} />
		</div>
	
	
	);
	
	
}
