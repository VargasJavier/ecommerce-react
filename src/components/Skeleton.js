const Skeleton = () => {
  return (
    <>
      <div className='border border-slate-50 shadow rounded-md p-4 w-full max-w-xs mx-auto'>
        <div className='animate-pulse flex flex-col'>
          <div className='rounded bg-slate-400 h-64 w-full'></div>
          <br />
          <div className='flex-1 space-y-4 py-1'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-400 rounded col-span-2'></div>
            </div>
            <div className='h-2 bg-slate-400 rounded'></div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-400 rounded col-span-1'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skeleton;
