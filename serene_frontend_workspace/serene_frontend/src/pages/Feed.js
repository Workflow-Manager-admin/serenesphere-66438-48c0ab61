import React, { useEffect, useRef, useState, useCallback } from "react";
import PostCard from "../components/PostCard";
import { posts as allPostsMock } from "../mockData";

/**
 * PUBLIC_INTERFACE
 * Feed: Overhauled for infinite scroll, animated card interactions, improved comment/like/save, and
 * fully responsive modern pastel palette. Uses TailwindCSS and custom CSS classes for design.
 * Feed is vertically centered with max width, beautiful on all screens.
 */
function Feed() {
  // Infinite scroll demo: Page size, visible posts, simulated fetching delay
  const PAGE_SIZE = 4;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const [feedPosts, setFeedPosts] = useState(() => allPostsMock.slice(0, PAGE_SIZE));

  // For animated loading underline at end of feed
  const loaderRef = useRef(null);

  // Infinite scroll load more observer
  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      // If user scrolled to bottom minus 280px (near footer), load more
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 260
      ) {
        if (visibleCount < allPostsMock.length) {
          setLoading(true);
          setTimeout(() => {
            const nextCount = Math.min(
              visibleCount + PAGE_SIZE,
              allPostsMock.length
            );
            setFeedPosts(allPostsMock.slice(0, nextCount));
            setVisibleCount(nextCount);
            setLoading(false);
          }, 550);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [visibleCount, loading]);

  // Styles for main column (tailwind + custom fallback)
  const feedContainer = "flex flex-col items-center min-h-screen py-8 bg-gradient-to-b from-[#e8eaf6] via-[#e8eaf6] to-[#bbe2e2] px-2 sm:px-2";
  const feedColumn =
    "w-full flex flex-col items-center max-w-[600px] sm:max-w-[520px] md:max-w-[500px] mx-auto";

  // If all posts loaded
  const endOfFeed = visibleCount >= allPostsMock.length;

  return (
    <div className={feedContainer}>
      <div className={feedColumn}>
        {feedPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
        <div
          className="w-full flex justify-center py-8"
          ref={loaderRef}
          aria-live="polite"
        >
          {loading ? (
            <span className="block w-8 h-8 border-4 border-bfc8e6 border-t-transparent border-x-transparent rounded-full animate-spin"></span>
          ) : endOfFeed ? (
            <span className="text-[#a3b0c0] font-medium text-sm opacity-90">— End of Feed —</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Feed;
