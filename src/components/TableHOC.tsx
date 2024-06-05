import {
  Column,
  useTable,
  TableOptions,
  TableInstance,
  Row,
  HeaderGroup,
  Cell,
  ColumnInstance,
} from "react-table";

function TableHOC<T extends Record<string, unknown>>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
    };

    const tableInstance = useTable(options) as TableInstance<T>;

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance;

    return (
      <div className={containerClassname}>
        <h2>{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: HeaderGroup<T>) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column: ColumnInstance<T>) => (
                  <th key={column.id}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row: Row<T>) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell: Cell<T>) => (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
