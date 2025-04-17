import React from "react";

interface Category {
	title: string;
	jobs: number;
	icon: string;
}

const categories: Category[] = [
	{
		title: "Development & IT",
		jobs: 16,
		icon: "./assets/images/code-icon.svg",
	},
	{
		title: "Marketing & Sales",
		jobs: 10,
		icon: "./assets/images/sales-icon.svg",
	},
	{
		title: "Customer Service",
		jobs: 8,
		icon: "./assets/images/customer-service-icon.svg",
	},
	{
		title: "Design & Creative",
		jobs: 13,
		icon: "./assets/images/design-icon.svg",
	},
	{
		title: "Product Management",
		jobs: 12,
		icon: "./assets/images/product-icon.svg",
	},
	{
		title: "Writing & Translation",
		jobs: 3,
		icon: "./assets/images/writing-icon.svg",
	},
];

const JobCategories: React.FC = () => {
	return (
		<section className="py-12 px-4 text-center">
			<h2 className="text-3xl font-semibold mb-2">Browse by category</h2>
			<p className="text-gray-400 mb-8">Browse openings in those categories</p>

			<div className="flex flex-wrap justify-center gap-6">
				{categories.map((cat, index) => (
					<div
						key={index}
						className="flex flex-col items-center rounded-xl p-6 w-full sm:max-w-40 transition-all duration-300 bg-[#F8F8F8] hover:scale-105"
					>
						<div
							className="rounded-full w-20 h-20 flex items-center justify-center mb-4 bg-[#101010] text-2xl"
						>
							<img src={cat.icon} alt={cat.title} className="w-8 h-8" />
						</div>
						<h3 className="font-semibold text-lg text-center">{cat.title}</h3>
						<p className="text-gray-600 mt-1 text-sm">
							{cat.jobs} Jobs
						</p>
					</div>
				))}
			</div>
			<button className="mt-8 text-sm font-medium underline">
				View all categories
			</button>
		</section>
	);
};

export default JobCategories;
