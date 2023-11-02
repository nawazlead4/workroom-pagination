import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const WorkroomPagination = ({ currentPage, onPageChange, totalPages, position }) => {
    const handleClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const generatePageItems = () => {
        const items = [];

        // Add "First" button
        items.push(
            <Pagination.First key="first" onClick={() => handleClick(1)} />
        );

        // Add "Previous" button
        items.push(
            <Pagination.Prev key="prev" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        );

        // Calculate the range of page numbers to display
        const startPage = Math.max(1, currentPage - 4);
        const endPage = Math.min(totalPages, startPage + 4);

        // Add page numbers
        for (let number = startPage; number <= endPage; number++) {
            items.push(
                <Pagination.Item key={number} active={number === currentPage} onClick={() => handleClick(number)}>
                    {number}
                </Pagination.Item>
            );
        }

        // Add "Next" button
        items.push(
            <Pagination.Next key="next" onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
        );

        // Add "Last" button
        items.push(
            <Pagination.Last key="first" onClick={() => handleClick(totalPages)} />
        );

        // You can customize the range and appearance as needed
        return items;
    };

    return (
        <>

            <div style={{ float: position, marginRight: '10px' }}>
                {totalPages > 0 && (<Pagination>
                    {generatePageItems()}
                </Pagination>
                )}
            </div>

        </>

    );
};

// Set a default value for prop3
WorkroomPagination.defaultProps = {
    totalPages: 0,
    position: 'right',
};

export default WorkroomPagination;
