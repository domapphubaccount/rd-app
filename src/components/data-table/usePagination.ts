export function usePagination(
  page: number,
  total: number,
  maxVisiblePages = 5
) {
  const pages: (number | "...")[] = [];

  if (total <= maxVisiblePages) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);

    if (page > 3) pages.push("...");

    const start = Math.max(2, page - 1);
    const end = Math.min(total - 1, page + 1);

    for (let i = start; i <= end; i++) {
      if (i > 1 && i < total) pages.push(i);
    }

    if (page < total - 2) pages.push("...");

    pages.push(total);
  }

  return pages;
}
