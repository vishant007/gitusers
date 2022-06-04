import React, { useEffect, useState } from 'react';

const UseEffect = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/albums/1/photos'
		);
		setUsers(await response.json());
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<>
			<h2>Github Users</h2>
			<div className='infocardContainer'>
				{users.map((curElem) => {
					return (
						<div>
							<div id='main'>
								<img src={curElem.thumbnailUrl}></img>
							</div>
							<div id='textbois'>
								<p>{curElem.title}</p>
								<a href='mailto:limecicila@gmail.com'>limecicila@gmail.com</a>
							</div>
						</div>
					);
				})}
				<div id='main'>
					<img src='https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png'></img>
				</div>
				<div id='textbois'>
					<h2>Emil Alicic</h2>
					<h4>Professional Memeologist</h4>
					<a href='mailto:limecicila@gmail.com'>limecicila@gmail.com</a>
				</div>
			</div>
		</>
	);
};

export default UseEffect;
