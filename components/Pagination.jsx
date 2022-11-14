const Pagination = ({ pageNumb }) => {
  return (
    <ul className="w-full flex justify-center">
      {(() => {
        const pageTotals = [];
        for (let i = 0; i < pageNumb; i++) {
          pageTotals.push(
            <li
              key={i}
              className="inline-block border rounded-full mx-2 w-[50px] h-[50px] hover:bg-slate-200"
            >
              <button className="w-full h-full text-sm p-3">{i + 1}</button>
            </li>
          );
        }
        return pageTotals;
      })()}
    </ul>
  );
};

export default Pagination;
