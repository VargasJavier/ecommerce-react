const Skeleton = () => {
  return (
    <>
      <div class='border border-slate-50 shadow rounded-md p-4 w-full max-w-xs mx-auto'>
        <div class='animate-pulse flex flex-col'>
          <div class='rounded bg-slate-400 h-64 w-full'></div>
          <br />
          <div class='flex-1 space-y-4 py-1'>
            <div class='grid grid-cols-3 gap-4'>
              <div class='h-2 bg-slate-400 rounded col-span-2'></div>
            </div>
            <div class='h-2 bg-slate-400 rounded'></div>
            <div class='grid grid-cols-3 gap-4'>
              <div class='h-2 bg-slate-400 rounded col-span-1'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skeleton;
