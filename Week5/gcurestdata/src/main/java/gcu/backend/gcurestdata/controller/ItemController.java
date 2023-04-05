package gcu.backend.gcurestdata.controller;

import gcu.backend.gcurestdata.domain.Item;
import gcu.backend.gcurestdata.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ItemController {
    @Autowired
    ItemRepository itemrepository;

    @PostMapping("/api/item")
    public String add(@RequestBody Item item) {
        itemrepository.save(item);
        return "update OK";
    }

    @GetMapping("/api/item")
    public List<Item> get() {
        return itemrepository.findAll();
    }

    @GetMapping("/api/item/{id}")
    public Optional<Item> getId(@PathVariable("id") Long id) {
        return itemrepository.findById(id);
    }
}
