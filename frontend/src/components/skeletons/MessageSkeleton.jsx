const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1 w-[100%]'>
					<div className='skeleton h-4 w-[60%]'></div>
					<div className='skeleton h-4 w-[80%]'></div>
				</div>
			</div>
			<div className='flex mt-3 gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1 w-[100%]'>
					<div className='skeleton h-4 w-[50%] ml-[auto]'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;