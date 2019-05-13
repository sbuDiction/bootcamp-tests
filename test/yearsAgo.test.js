describe('yearsAgo' , function(){
    it('should return the total for the  year 1976' , function(){
        assert.equal(yearsAgo(year), 43);

    });
    it('should return the total for the year 2000 ' , function(){
        assert.equal(yearsAgo(years), 19);

    });

});

