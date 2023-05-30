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
			imageUrl:
				'https://lh3.googleusercontent.com/-iGj3ccGnxNEyziapDLn8hvgU0R40zRAU3a9xgvxDMj9ByOBk-Bngvz-JyNKGAy4Riqt0knFmOj-H8dcYv_BmUX7cOZMqCMEwE-QbRPGUyqbr8HWyaG0GcfRfVzY1SMBEbP0D9rYJdJSUYvhbkEMPza2Oh--wDP9m1Ox93VrevuqYy_AceQlha3dNh8Zd1L2Ti1YptIOOMAOTIOj-6lWX--7IzF9Wy-rSP5zftf4naDutHUpo4zRHaesKEtUjYjIrBBLOFXk_TM9ywNJ5pXjeE_BgYXmrvYFUo7fyM6Dev5Qt6rkrb1BCQ3MHnaqOV2QkM0aQVJ86-OGM5t_KZEh7z9_lYd-ih-ZPYhWGnHKWboceePKAwJHWFcgZeXFCbISXlxqiIn5KDqUPyxcGQnbjUpivQPUtls5LC5zkZD3gef3EpLE-afZxhXW_zvv88smlzHLLk_41gq4ggVxKWrpZBQmgUmWfC6bxHKj10OFkZ5mH5Z2ANbXSgUmTsn9JM61NpxG543YxNdY0T8nMREMiTvTeWhxtaROJcuGlVkQ6SKqqmzx9U5GHrd8IR5_QFJlYtpLrB1o56PDexZck9ScI9RPSNE9R75van_VJQrWn_8MDlJvpN1hOLATe7YlyX3CADQb2XxQU0s6vc4s8u9Q4oiC0fKV2jV-AZd7cTXnUskgKtGXLxjiQ1oOVV2BnWKxEGtH5DlsukzpyNLPT1GTK9-VPaxQOgP8gpR7pvixIkDm0gQYZh7hcuNOuiZrwdHvdfue3MRWdcqCf-N9H5iqvhZhzmHcLFmgryFNjXw0Hm3IPpFtJrHLBiYtBJqWFOLXZt7WElYs3heoMj_j-EIfv94ZFd707YVo6j0iYwi2KOp00Ch-kanL2KWbSoCKKyxxCFqpRU7vmVUH7CbsV0hQbJ9V8YrWKaSL3iUtXE-RuRs2lYrXKofIcfR-gZUfYLV9JkiwcwAR6fLRBQ3Ksi0osQ=w1528-h1528-s-no?authuser=0',
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
