describe('mostProfitableDepartment' , function(){
    it('should return the most prifitable department' , function(){
        assert.deepEqual(mostProfitableDepartment(salesData), "outdoor");
    });

    it('should return nothing if the are no departments in the peremeter ' , function(){
        assert.deepEqual(mostProfitableDepartment(""), []);
    });

});
