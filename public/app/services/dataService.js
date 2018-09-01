(function(){
    'use strict';

    /*
    // In .factory -
    // First Parameter is the name of the service
    // Second Parameter is a function that would be called and would be assigned to the get property when the provider
    function is called behind the scenes
    */
    angular
        .module('app')
        .factory('dataService', dataService);

    /** @ngInject */
    function dataService(logger){

       return {
           // Reference Function
           getAllBooks: getAllBooks,
           getAllReaders: getAllReaders
       };

       function getAllBooks(){
           logger.output('getting all books');
        return [
            {
                book_id: 1,
                title: 'Harry Potter and the Deathly Hallows',
                author: 'J.K. Rowling',
                yearPublished: 2000
            },
            {
                book_id: 2,
                title: 'The Cat in the Hat',
                author: 'Dr. Seuss',
                yearPublished: 1957
            },
            {
                book_id: 3,
                title: 'Encyclopedia Brown, Boy Detective',
                author: 'Donald J. Sobol',
                yearPublished: 1963
            }
        ];
       }

       function getAllReaders () {
        logger.output('getting all readers');
        return [
            {
                reader_id: 1,
                name: 'Marie',
                weeklyReadingGoal: 315,
                totalMinutesRead: 5600
            },
            {
                reader_id: 2,
                name: 'Daniel',
                weeklyReadingGoal: 210,
                totalMinutesRead: 3000
            },
            {
                reader_id: 3,
                name: 'Lanier',
                weeklyReadingGoal: 140,
                totalMinutesRead: 600
            }
        ];
       }
    }

    dataService.$inject = ['logger'];

}());