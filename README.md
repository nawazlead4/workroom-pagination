# workroom-pagination

The workroom-pagination library exported as a [UMD](https://github.com/umdjs/umd) module.

# Installation
Using npm:
```shell
$ npm i -g workroom-pagination
$ npm i --save workroom-pagination
```

# Usage
```shell
import React from 'react';
import WorkroomPagination from "workroom-pagination";

export default function MyComponent() {
  return (
    <>
        <WorkroomPagination currentPage={currentPage} totalPages={Math.ceil(totalCount / PAGE_SIZE)} onPageChange={handlePageChange} />
    </>
  );
};

export default MyComponent;
```
# Props
| Prop        | Type           | Description  |
| ------------- |:-------------:| -----:|
| currentPage      | Int | $1600 | The current page number |
| totalPages      | Int      |   Total number of pages to be displayed.  |
| onPageChange | function      |  The call back function which should be triggered when the user changes the page from pagination.   |
