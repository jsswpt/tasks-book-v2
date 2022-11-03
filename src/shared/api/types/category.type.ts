export type Category = {
  id: string;
  title: string;
};

export type CreateCategoryProps = Omit<Category, "id">;
export type RemoveCategoryProps = Pick<Category, "id">;
