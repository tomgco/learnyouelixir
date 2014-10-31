[file | _] = System.argv
IO.puts Enum.count File.stream! file
