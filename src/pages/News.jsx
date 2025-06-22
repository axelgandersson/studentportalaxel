import { news } from "../data/news";

const News = () => (
	<div>
		<h2>Nyheter</h2>
		{news.map((post) => (
			<div key={post.id} className="mb-4">
				<h4>{post.title}</h4>
				<p>{post.content}</p>
			</div>
		))}
	</div>
);

export default News;
