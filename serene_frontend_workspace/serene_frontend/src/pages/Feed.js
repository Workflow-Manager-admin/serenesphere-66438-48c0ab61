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
  // Use feed-main-col and feed-card class to clamp widths
  const feedColumn = "feed-main-col mx-auto";


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
            <span style={{
                display: "inline-block",
                width: 38,
                height: 38,
                border: "4.5px solid #bfc8e6",
                borderTop: "4.5px solid #bbe2e2",
                borderRight: "4.5px solid #e8eaf6",
                borderBottom: "4.5px solid transparent",
                borderLeft: "4.5px solid transparent",
                borderRadius: "50%",
                animation: "feedspin 0.7s linear infinite",
                boxShadow: "0 1.5px 9px 0px #bfc8e63b"
              }}
              aria-label="Loading more posts"
            />
          ) : endOfFeed ? (
            <span className="text-[#a3b0c0] font-medium text-sm opacity-90">— End of Feed —</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Feed;
