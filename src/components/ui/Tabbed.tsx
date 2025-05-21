import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: '<form><input type="text" /></form>',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
        
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

const handleClick = () => {}
const handleSubmit = () => {}

export default function Tabbed() {
  return (
    <div className="flex h-screen w-full justify-center border bg-card rounded-xl">
      <div className="w-full max-w-md">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="cursor-pointer rounded-xl border px-3 py-1 text-sm/6 font-semibold text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
    <TabPanel>
      {/* ✅ Form in Tab 1 */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" />
        <button type="submit">Submit</button>
      </form>
    </TabPanel>
    <TabPanel>
      {/* ✅ Button in Tab 2 */}
      <button onClick={handleClick}>Click Me</button>
    </TabPanel>
  </TabPanels>
          {/* <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-black">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      <ul className="flex gap-2 text-black" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels> */}
        </TabGroup>
      </div>
    </div>
  )
}