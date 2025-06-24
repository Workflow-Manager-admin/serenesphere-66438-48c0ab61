import React, { useState, useRef } from "react";

/**
 * PUBLIC_INTERFACE
 * PostCard: Overhauled feed card for SereneSphere.
 * Features: animated likes, toggle save, live inline comments, tooltips, and
 * stunning card layout fully responsive per new palette.
 */
function PostCard({
  avatar,
  name,
  time,
  text,
  image,
  likes: initialLikes = 0,
  comments: initialComments = 0,
}) {
  // Like animation state
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  // Save/favorite toggling
  const [saved, setSaved] = useState(false);
  const [saveTooltip, setSaveTooltip] = useState(false);

  // Comments state
  const [allComments, setAllComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  // Focus/ref for comment input
  const commentRef = useRef();

  // Handle like toggle w/ animation, increment, decrement
  function handleLike() {
    setLiked((prev) => {
      if (!prev) {
        setLikeCount((lc) => lc + 1);
      } else {
        setLikeCount((lc) => (lc > 0 ? lc - 1 : 0));
      }
      return !prev;
    });
  }

  // Handle save action (toggle + temporary tooltip)
  function handleSave() {
    setSaved((prev) => !prev);
    setSaveTooltip(true);
    setTimeout(() => setSaveTooltip(false), 1100);
  }

  // Handle comment submit
  function handleComment(e) {
    e.preventDefault();
    const trimmed = commentInput.trim();
    if (trimmed.length === 0) return;
    setAllComments((prev) => [...prev, trimmed]);
    setCommentInput("");
    setTimeout(() => commentRef.current && commentRef.current.focus(), 80);
  }

  // Layout styles w/ Tailwind utility classes
  return (
    <div
      className="feed-card bg-[#e8eaf6] rounded-xl shadow-lg border border-[#bbe2e2] transition p-5 md:p-6 mb-9 flex flex-col items-stretch animate-pop relative group"
      style={{
        boxShadow: "0 1.5px 20px 0px rgba(187,226,226,0.13)",
      }}
      tabIndex={0}
    >
      {/* Header row: Avatar + Name + Time */}
      <div className="flex items-center mb-3 sm:mb-2 gap-4">
        <img
          src={avatar || "https://api.dicebear.com/6.x/personas/svg?seed=demo"}
          alt={name || "User avatar"}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#bfc8e6] bg-[#bbe2e2] mr-2 shrink-0"
          loading="lazy"
        />
        <div>
          <span className="font-semibold text-[#566181] text-[1.09rem]">{name || "Serene User"}</span>
          <span className="ml-3 text-[#a3b0c0] font-medium text-[0.96em]">{time ? <>· {time}</> : null}</span>
        </div>
      </div>
      {/* Card main text */}
      {text && (
        <div
          className="text-[#1a1a1a] font-medium text-[1.07rem] whitespace-pre-line mb-3 text-left"
        >
          {text}
        </div>
      )}
      {/* Post image if present */}
      {image && (
        <div className="w-full flex justify-center mb-3">
          <img
            src={image}
            alt="Post"
            className="rounded-xl max-h-80 shadow-md w-full object-cover"
            style={{
              boxShadow: "0 0.5px 11px rgba(187, 226, 226, 0.13)",
              maxHeight: 320,
            }}
            loading="lazy"
          />
        </div>
      )}

      {/* Actions row: Like, Comment, Save */}
      <div className="flex items-center gap-8 pt-2 pb-1 pl-0 text-[#586284] select-none">
        {/* Like button */}
        <button
          aria-label="Like post"
          className={`flex items-center gap-1.5 text-[1.09em] hover:text-[#e87a41] active:scale-95 focus:outline-none transition relative`}
          onClick={handleLike}
          style={{ color: liked ? "#e87a41" : "#586284" }}
        >
          {/* Animated heart */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 20 20"
            style={{
              marginRight: 3,
              transform: liked ? "scale(1.18)" : "scale(1)",
              transition: "transform 0.19s cubic-bezier(0.5,1,0.87,1.14)",
              filter: liked ? "drop-shadow(0 3px 11px #e87a4177)" : "none",
            }}
            aria-hidden="true"
          >
            <path
              d="M10 17.5s-5.5-3.8-7.5-7.3C.7 7.8 2.6 5 5.2 5A4.16 4.16 0 0 1 10 7.48 4.16 4.16 0 0 1 14.8 5c2.6 0 4.5 2.8 2.7 5.2C15.5 13.7 10 17.5 10 17.5z"
              fill={liked ? "#e87a41" : "#bfc8e6"}
              stroke={liked ? "#e87a41" : "#bbe2e2"}
              strokeWidth="1.2"
            />
          </svg>
          <span className={`transition ${liked ? "animate-pop" : ""}`}>{likeCount}</span>
        </button>
        {/* Comment icon + count (focuses input) */}
        <button
          aria-label="Comment on post"
          className="flex items-center gap-1.5 text-[1.04em] hover:text-[#bfc8e6] active:scale-95 transition"
          onClick={() => commentRef.current && commentRef.current.focus()}
        >
          <svg width="24" height="24" viewBox="0 0 20 20" className="mr-1" aria-hidden="true">
            <ellipse cx="10" cy="10" rx="7.4" ry="6.2" fill="#bbe2e2" stroke="#bfc8e6" strokeWidth="1.09"/>
            <ellipse cx="10" cy="15.35" rx="2.7" ry="1.21" fill="#e8eaf6"/>
          </svg>
          <span>{(initialComments || 0) + allComments.length}</span>
        </button>
        {/* Save/Bookmark animated toggle */}
        <span className="ml-auto relative">
          <button
            aria-label={saved ? "Unsave post" : "Save post"}
            className={`flex items-center gap-2 transition active:scale-95 group/bookmark`}
            style={{ color: saved ? "#bfc8e6" : "#bbb", }}
            onClick={handleSave}
            onBlur={() => setSaveTooltip(false)}
            tabIndex={0}
          >
            {/* Bookmark icon w/ fill animation */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{
                filter: saved ? "drop-shadow(0 2px 9px #bfc8e6cc)" : "none",
                transform: saved ? "scale(1.08)" : "scale(1)",
                transition: "all 0.18s cubic-bezier(0.42,0,0.58,1.4)",
              }}
              aria-hidden="true"
            >
              <path
                d="M6 5.5A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5v14.3c0 .8-1 .9-1.46.4L12 16.6l-4.54 3.6A.9.9 0 0 1 6 19.8V5.5z"
                fill={saved ? "#bfc8e6" : "none"}
                stroke="#bfc8e6"
                strokeWidth="1.4"
              />
            </svg>
          </button>
          {/* Tooltip animated */}
          <span
            className={`absolute select-none pointer-events-none z-10 left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1.5 rounded-lg bg-white/90 text-[#7ba5b7] text-[0.99em] border border-[#bbe2e2] transition-opacity duration-200 ${
              saveTooltip ? "opacity-100" : "opacity-0"
            }`}
            aria-live="polite"
          >
            {saved ? "Saved!" : "Removed"}
          </span>
        </span>
      </div>

      {/* Inline comment box/anim list */}
      <div className="w-full mt-3 pb-2 px-0">
        {/* Previous + new comments */}
        {(initialComments > 0 || allComments.length > 0) && (
          <div className="mb-2 space-y-1">
            {/* Use initial static dummy (not animated) */}
            {/* Appended comments with pop animation */}
            {allComments.map((c, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 pl-1 text-[#566181] bg-white/80 rounded-lg px-3 py-1.5 text-[1em] animate-pop"
                style={{ borderLeft: "3.5px solid #bfc8e6" }}
              >
                <svg
                  width="15"
                  height="15"
                  aria-hidden="true"
                  style={{ marginRight: 2 }}
                >
                  <ellipse cx="7.5" cy="7" rx="5.2" ry="4" fill="#bbe2e2" stroke="#bfc8e6" strokeWidth="1.2"/>
                </svg>
                <span>{c}</span>
              </div>
            ))}
          </div>
        )}
        {/* Comment input area */}
        <form
          className="flex items-center gap-2 w-full px-0 mt-0"
          onSubmit={handleComment}
          autoComplete="off"
        >
          <input
            ref={commentRef}
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment…"
            className="flex-1 px-4 py-2 rounded-full bg-white text-[#343845] border border-[#bbe2e2] shadow-sm font-regular text-[1em] outline-none focus:ring-2 focus:ring-[#bbe2e2] transition"
            maxLength={97}
            autoFocus={false}
            aria-label="Add comment"
            spellCheck="true"
          />
          <button
            type="submit"
            disabled={commentInput.trim().length === 0}
            className={`ml-2 px-3 py-2 rounded-lg bg-gradient-to-tr from-[#bbe2e2] via-[#e8eaf6] to-[#bfc8e6] font-semibold text-[#415973] transition shadow-md hover:scale-105 active:scale-98 
              focus:outline-none focus:ring-2 focus:ring-[#bfc8e6] ${
                commentInput.trim().length
                  ? "opacity-100 hover:shadow-lg"
                  : "opacity-50"
              } animate-pop`}
            tabIndex={commentInput.trim().length > 0 ? 0 : -1}
            aria-disabled={commentInput.trim().length === 0}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCard;
