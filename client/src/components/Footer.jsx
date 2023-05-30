import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-gray-800 py-8'>
			<div className='container mx-auto px-4'>
				<p className='text-center text-gray-300'>
					© {new Date().getFullYear()} Created by{' '}
					<span className=' text-blue-500 py-1 px-2 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200'>
						Arpit
					</span>{' '}
					and{' '}
					<span className='text-blue-500 py-1 px-2 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-200'>
						Ankush
					</span>{' '}
					for Final Year Submission, CGC Landran
				</p>
			</div>
		</footer>
	);
};

export default Footer;
