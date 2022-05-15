import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const fileNames = fs.readdirSync(postsDirectory);

// mdファイルのデータを取り出す
export function getPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    // ファイル名の拡張子を取り除いたものをidとする
    const id = fileName.replace(/\.md$/, '');

    // マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

// getStaticPath の return で使う path を取得する
export function getAllPostIds() {
  return fileNames.map((fileNames) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}
