# React + material-ui table example

## Note on data structures
This example code populates the table dynamically and so any kind of data is possible to display.
To construct the table, two arrays are passed in; `header` and `data`.
These two data structures are related, you need to know how they relate before using this example code.

### header
Controls the which columns will be displayed in the table.
* `label` is the text that will be displayed in the column header.
* `propName` is a string of the field contained within `data` to reference. See `ToDoTable.buildTableBodyRow()`. Any objects in `data` that correspond to `propName` will be displayed in that column.
For example, if `description` is being used in `data`, `header` must contain an object with `propName: description` in order to reference each `description` field in `data`.

### data
Is simply the data used to populate in the body of the table. In order to display, the objects in `data` must correspond to a `propName` string of the same name.
