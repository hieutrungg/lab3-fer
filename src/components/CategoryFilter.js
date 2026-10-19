import React from "react";

function CategoryFilter({ categories, value, onChange }) {
	return (
		<div>
			<label htmlFor="category">Danh mục:</label>
			<select id="category" value={value} onChange={onChange}>
				<option value="all">Tất cả danh mục</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
}

export default CategoryFilter;
