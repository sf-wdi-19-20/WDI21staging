class Array
  def iterative_bindex element, lower = 0, upper = length - 1
    while upper >= lower
      mid = (upper + lower) / 2
      if self[mid] < element
        lower = mid + 1
      elsif self[mid] > element
        upper = mid - 1
      else
        return mid
      end
    end

    return nil
  end
end
