import { CiBookmark } from "react-icons/ci";
import {
  FaStar,
  FaRegStar,
  FaEye,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {id, title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < count ? (
        <FaStar key={i} className="text-orange-400 text-sm" />
      ) : (
        <FaRegStar key={i} className="text-orange-300 text-sm" />
      ),
    );
  };

  return (
    <div className="card bg-base-100 border border-base-200 rounded-sm mt-5 overflow-hidden">
      {/* Author Row */}
      <div className="flex bg-base-200 items-center justify-between p-5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-11 h-11 rounded-full ring ring-base-200">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-base-content leading-tight mb-1">
              {author.name}
            </p>
            <p className="text-xs text-base-content/50">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-base-content/40">
          <button
            className="hover:text-base-content transition-colors"
            title="Bookmark"
          >
            <CiBookmark size={22} className="text-gray-500 bg-base-200" />
          </button>
          <button
            className="hover:text-base-content transition-colors"
            title="Share"
          >
            <IoShareSocialOutline size={22} className="text-gray-500 bg-base-200" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body px-5 pt-3 pb-5 gap-4">
        {/* Title */}
        <h2 className="card-title text-base font-bold leading-snug text-base-content">
          {title}
        </h2>

        {/* Thumbnail */}
        <figure className="rounded-sm overflow-hidden">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full h-52 object-cover"
          />
        </figure>

        {/* Tags + Details */}
        <div className="text-sm text-accent leading-relaxed">
          <span className="font-medium text-base-content/70">Tags: </span>
          {tags.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i < tags.length - 1 && ", "}
            </span>
          ))}{" "}
          — {details.slice(0, 150)}...
        </div>

        {/* Read More */}
        <Link
          to={`/news-details/${id}`}
          className="text-orange-500 font-semibold text-sm hover:underline w-fit"
        >
          Read More
        </Link>

        {/* Divider */}
        <div className="divider my-0" />

        {/* Footer: Rating + Views */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {renderStars(rating.number)}
            </div>
            <span className="text-sm font-semibold text-gray-500">
              {rating.number}.0
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
            <FaEye size={18} className="text-gray-500" />
            <span>{total_view.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
