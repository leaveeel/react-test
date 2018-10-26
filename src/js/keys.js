import React from 'react';

function Blog() {
	const sidebar = (
		<ul>
		{posts.map((post) => <li key={post.id}>
			{post.title}
			</li>
			)}
		</ul>
	)
	const content = posts.map((post) => <div key={post.id}>
		<h3>{post.title}</h3>
		<p>{post.content}</p>
		</div>)
	return (
		<div>
		{sidebar}
		<hr />
		{content}
		</div>
	)
}

const posts = [{
	id: 1,
	title: "Hello World",
	content: "1111"
}, {
	id: 2,
	title: "install",
	content: "2222"
}]

export default Blog