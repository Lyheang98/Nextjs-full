export function buttonVariants({ variant }: { variant?: string } = {}) {
    switch (variant) {
      case "outline":
        return "border border-gray-300 text-gray-700 px-4 py-2 rounded-md";
      default:
        return "bg-blue-600 text-white px-4 py-2 rounded-md";
    }
  }