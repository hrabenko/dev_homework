class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemPerPage = itemsPerPage;
        this.countItem = this.collection.length;
        this.countPage = Math.ceil(this.countItem / this.itemPerPage);
    }
    itemCount() {
        return this.countItem;
    }
    pageCount() {
        return this.countPage;
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.countPage - 1 || pageIndex < 0) {
            return -1;
        }

        if (this.countItem % this.itemPerPage === 0 || pageIndex < this.countPage - 1){
            return this.itemPerPage;
        } else if (pageIndex === this.countPage - 1) {
            return this.countItem % this.itemPerPage;
        }


    }
    pageIndex(itemIndex) {
        if (itemIndex > this.collection.length - 1 || itemIndex < 0) {
            return -1;
        }

        return Math.floor( itemIndex / this.itemPerPage);

    }
}