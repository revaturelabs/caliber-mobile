
class categoryService {
    private URI: string;
    constructor() {
        this.URI = '';
    }

    // GET function for /categories
    getCategories(queryString?: string): Promise<Category[]> {
        let promise: Promise<Category[]> = new Promise ((resolve) => {
            setTimeout(resolve, 10, new Category());
        })
        return promise;
    }

    // POST function for /categories
    addCategory(skill: string, active: boolean): Promise<Category> {
        let promise: Promise<Category> = new Promise ((resolve) => {
            setTimeout(resolve, 10, new Category());
        })
        return promise;
    }

    // PUT function for /categories/{categoryId}
    updateCategory(id: number): Promise<Category>{ 
        let promise: Promise<Category> = new Promise ((resolve) => {
            setTimeout(resolve, 10, new Category());
        })
        return promise;
    }
}

class Category {
    public id: number = 0;
    public skill: string = '';
    public active: boolean = true;
}

export default new categoryService();
