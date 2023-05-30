import React from 'react';

const Profile = ({ firstName, lastName, occupation, imageUrl }) => {
	return (
		<div className='flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105'>
			<div className='bg-white w-full h-full flex justify-center items-center'>
				<img
					src={imageUrl}
					alt={name}
					className='w-40 h-40 rounded-full mb-4'
				/>
			</div>
			<h2 className='text-xl text-white font-bold my-4'>
				{firstName} {lastName}{' '}
				<div
					className='w-20 bg-blue-400 ml-auto mt-1'
					style={{ height: '1.5px' }}
				></div>
			</h2>
			<p className='text-white my-2 w-fit h-10 flex justify-center  px-4 mb-6 items-center'>
				{occupation}
			</p>
		</div>
	);
};

const ProfileCard = () => {
	const profiles = [
		{
			firstName: 'Arpit',
			lastName: 'Chugh',
			occupation: 'UI/UX and Frontend Developer',
			imageUrl: 'https://avatars.githubusercontent.com/u/63435960?v=4',
		},
		{
			firstName: 'Ankush ',
			lastName: 'Sharma',
			occupation: 'Software Developer',
			imageUrl: './ankush.jpg',
		},
	];
	return (
		<div className='flex flex-col items-center justify-center py-5 my-10'>
			<h1 className='text-3xl font-bold mb-8 text-blue-400'>Profiles</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{profiles.map((profile, index) => (
					<Profile key={index} {...profile} />
				))}
			</div>
		</div>
	);
};

export default ProfileCard;
